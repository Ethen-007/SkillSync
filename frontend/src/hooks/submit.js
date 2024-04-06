
import { useState } from "react";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { signAndSubmit } from "../utils/submitt";

export const useSubmitTransaction = () => {
  const { account, signAndSubmitTransaction } = useWallet();
  const [transactionInProgress, setTransactionInProgress] = useState(false);


  const submitTransaction = async (transactionData) => {
    if (!account) throw new Error("No connected account");
    setTransactionInProgress(true);
    try {
        await signAndSubmit(transactionData, signAndSubmitTransaction);
        
        alert("Transaction successfully submitted!");
      } catch (error) {
        console.error("Transaction submission failed:", error);
        alert("Failed to submit the transaction. Please try again.");
      } finally {
        setTransactionInProgress(false);
      }
      
  };

  return { submitTransaction, transactionInProgress };
};