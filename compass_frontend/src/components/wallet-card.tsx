import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
// import { formatEther, parseEther } from 'ethers/utils';

declare global {
  interface Window {
    ethereum: any;
  }
}

const WalletCard: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [defaultAccount, setDefaultAccount] = useState<string | null>(null);
  const [userBalance, setUserBalance] = useState<string | null>(null);
  const [connButtonText, setConnButtonText] = useState<string>('Connect Wallet');
  const [transactionAmount, setTransactionAmount] = useState<string | null>(null);

  const connectWalletHandler = () => {
    if (window.ethereum && window.ethereum.isMetaMask) {
      console.log('MetaMask Here!');

      window.ethereum.request({ method: 'eth_requestAccounts' })
        .then((result: string[]) => {
          accountChangedHandler(result[0]);
          setConnButtonText('Wallet Connected');
          getAccountBalance(result[0]);
        })
        .catch((error: { message: string }) => {
          setErrorMessage(error.message);
        });

    } else {
      console.log('Need to install MetaMask');
      setErrorMessage('Please install MetaMask browser extension to interact');
    }
  };

  // update account, will cause component re-render
  const accountChangedHandler = (newAccount: string) => {
    setDefaultAccount(newAccount);
    getAccountBalance(newAccount);
  };

  const getAccountBalance = (account: string) => {
    window.ethereum.request({ method: 'eth_getBalance', params: [account, 'latest'] })
      .then((balance: string) => {
        setUserBalance(ethers.utils.formatEther(balance));
      })
      .catch((error: { message: string }) => {
        setErrorMessage(error.message);
      });
  };

  const chainChangedHandler = () => {
    // reload the page to avoid any errors with chain change mid use of application
    window.location.reload();
  };

  const sendEthHandler = async () => {
    if (window.ethereum && defaultAccount) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      try {
        const tx = await signer.sendTransaction({
          to: defaultAccount,
          value: ethers.utils.parseEther("0.0001")
        });
        setTransactionAmount("0.0001");
        console.log(tx);
      } catch (error: any) {
        setErrorMessage(error.message);
      }
    } else {
      setErrorMessage("Please connect your wallet first.");
    }
  };

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', accountChangedHandler);
      window.ethereum.on('chainChanged', chainChangedHandler);

      return () => {
        if (window.ethereum.removeListener) {
          window.ethereum.removeListener('accountsChanged', accountChangedHandler);
          window.ethereum.removeListener('chainChanged', chainChangedHandler);
        }
      };
    }
  }, []);

  return (
    <div className='walletCard'>
      <h4> {"Connection to MetaMask using window.ethereum methods"} </h4>
      <button onClick={connectWalletHandler}>{connButtonText}</button>
      <div className='accountDisplay'>
        <h3>Address: {defaultAccount}</h3>
      </div>
      <div className='balanceDisplay'>
        <h3>Balance: {userBalance}</h3>
      </div>
      <button onClick={sendEthHandler}>Send 0.0001 ETH</button>
      {transactionAmount && <p>Transaction Amount: {transactionAmount} ETH</p>}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default WalletCard;
