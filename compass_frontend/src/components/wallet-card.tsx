"use client";
import React, { useState, useEffect } from "react";
import { ethers } from "ethers";

declare global {
  interface Window {
    ethereum: any;
  }
}

const WalletCard: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [defaultAccount, setDefaultAccount] = useState<string | null>(null);
  const [userBalance, setUserBalance] = useState<string | null>(null);
  const [connButtonText, setConnButtonText] =
    useState<string>("Connect Wallet");
  const [transactionAmount, setTransactionAmount] = useState<string | null>(
    null
  );
  const [inputValue, setInputValue] = useState<string>("");
  const [convertedValue, setConvertedValue] = useState<string | null>(null);

  const connectWalletHandler = () => {
    if (window.ethereum && window.ethereum.isMetaMask) {
      console.log("MetaMask Here!");

      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result: string[]) => {
          accountChangedHandler(result[0]);
          setConnButtonText("Wallet Connected");
          getAccountBalance(result[0]);
        })
        .catch((error: { message: string }) => {
          setErrorMessage(error.message);
        });
    } else {
      console.log("Need to install MetaMask");
      setErrorMessage("Please install MetaMask browser extension to interact");
    }
  };

  const accountChangedHandler = (newAccount: string) => {
    setDefaultAccount(newAccount);
    getAccountBalance(newAccount);
  };

  const getAccountBalance = (account: string) => {
    window.ethereum
      .request({ method: "eth_getBalance", params: [account, "latest"] })
      .then((balance: string) => {
        setUserBalance(ethers.utils.formatEther(balance));
      })
      .catch((error: { message: string }) => {
        setErrorMessage(error.message);
      });
  };

  const chainChangedHandler = () => {
    window.location.reload();
  };

  const sendEthHandler = async () => {
    if (window.ethereum && defaultAccount && convertedValue) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      try {
        const tx = await signer.sendTransaction({
          to: defaultAccount,
          value: ethers.utils.parseEther(convertedValue),
        });
        setTransactionAmount(convertedValue);
        console.log(tx);
      } catch (error: any) {
        setErrorMessage(error.message);
      }
    } else {
      setErrorMessage(
        "Please connect your wallet first or enter a valid amount."
      );
    }
  };

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", accountChangedHandler);
      window.ethereum.on("chainChanged", chainChangedHandler);

      return () => {
        if (window.ethereum.removeListener) {
          window.ethereum.removeListener(
            "accountsChanged",
            accountChangedHandler
          );
          window.ethereum.removeListener("chainChanged", chainChangedHandler);
        }
      };
    }
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleConversion = () => {
    const number = parseFloat(inputValue);
    if (!isNaN(number)) {
      // Assume a conversion rate of 0.0001 Ether per unit
      const conversionRate = 0.0001;
      const etherValue = number * conversionRate;
      setConvertedValue(etherValue.toFixed(4)); // Limit to 4 decimal places
    } else {
      setConvertedValue(null);
    }
  };

  return (
    <div className="walletCard">
      <h4> {"Connection to MetaMask using window.ethereum methods"} </h4>
      <button onClick={connectWalletHandler}>{connButtonText}</button>
      <div className="accountDisplay">
        <h3>Address: {defaultAccount}</h3>
      </div>
      <div className="balanceDisplay">
        <h3>Balance: {userBalance}</h3>
      </div>
      <div>
        <input
          type="number"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a number"
        />
        <button onClick={handleConversion}>Convert to Ether</button>
        {convertedValue !== null && (
          <p>Converted Value: {convertedValue} ETH</p>
        )}
      </div>
      <button onClick={sendEthHandler}>Send Converted ETH</button>
      {transactionAmount && <p>Transaction Amount: {transactionAmount} ETH</p>}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default WalletCard;
