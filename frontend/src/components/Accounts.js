import { AptosClient } from "@aptoslabs/aptos-sdk";
import { PetraWallet } from "petra-wallet";

// Replace with your Aptos node URL
const NODE_URL = "https://fullnode.aptoslabs.com";

export async function generateAccount(username, password) {
  // Use Petra Wallet SDK to create a secure account
  const wallet = new PetraWallet();
  const account = await wallet.createAccount({ username, password });

  // Return only the address, as storing the private key in plain text is a security risk
  return { address: account.address };
}

export async function buildTransaction(sender, receiver, amount) {
  const client = new AptosClient(NODE_URL);

  // Replace with the actual transaction object construction logic using the client and provided details
  const transaction = { /* ... */ };

  const signedTransaction = await wallet.signTransaction(transaction); // Assuming a wallet instance is available
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