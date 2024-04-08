// Importing AptosClient from the aptos package
import { AptosClient } from "aptos";
// import { useWallet } from "@aptos-labs/wallet-adapter-react";

const aptosClient = new AptosClient("https://fullnode.testnet.aptoslabs.com"); 

export const signAndSubmit = async (transaction, signAndSubmitTransaction) => {
  try {
    const response = await signAndSubmitTransaction(transaction);
    await aptosClient.waitForTransaction(response.hash);
    return response;
  } catch (error) {
    console.error("Transaction failed", error);
    throw error;
  }
};
