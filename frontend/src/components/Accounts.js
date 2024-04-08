import { AptosClient } from "@aptoslabs/aptos-sdk";
import { PetraWallet } from "petra-wallet";


const NODE_URL = "https://fullnode.aptoslabs.com";

export async function generateAccount(username, password) {

  const wallet = new PetraWallet();
  const account = await wallet.createAccount({ username, password });

  return { address: account.address };
}

export async function buildTransaction(sender, receiver, amount) {
  const client = new AptosClient(NODE_URL);

 
  const transaction = { /* ... */ };

  const signedTransaction = await wallet.signTransaction(transaction);
  return signedTransaction;
}

export async function sendTransaction(signedTransaction) { 
  const client = new AptosClient(NODE_URL);

  try {
    await client.submitTransaction(signedTransaction);
    console.log("Transaction submitted successfully!");
  } catch (error) {
    console.error("Error submitting transaction:", error);
  }
}
