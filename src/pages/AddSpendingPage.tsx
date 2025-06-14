
import { useState } from "react";
import { TextField, Button } from "@mui/material";
import styles from "./AddSpendingPage.module.css";

const AddSpendingPage = () => {
  const [date, setDate] = useState("");
  const [merchantName, setMerchantName] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = () => {
    console.log({
      date,
      merchantName,
      category,
      amount,
      note,
    });
  };

  return (
    <>
      <h2>Add New Spending</h2>
      <div className={styles.FormContainer}>
        <TextField
          label="Date"
          fullWidth
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          slotProps={{ inputLabel: { shrink: true } }}
        />
        <TextField
          label="Merchant Name"
          fullWidth
          value={merchantName}
          onChange={(e) => setMerchantName(e.target.value)}
        />
        <TextField
          label="Category"
          fullWidth
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <TextField
          label="Amount"
          fullWidth
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <TextField
          label="Note"
          fullWidth
          multiline
          rows={2}
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <Button
          variant="contained"
          onClick={handleSubmit}
          className={styles.submitButton}
        >
          Submit
        </Button>
      </div>
    </>
  );
};

export default AddSpendingPage;
