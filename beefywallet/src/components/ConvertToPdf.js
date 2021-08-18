import { jsPDF } from "jspdf";
import React, { PureComponent } from "react";
import { useState, useContext } from "react";
import { ApiDataContext } from "../context/apiData";
import Button from "@material-ui/core/Button";

const PdfGemerator = () => {
  let yPosition = 60;
  let offset = 10;
  let bigOffset = 10;
  const { transactionsData, moneySourceData } = useContext(ApiDataContext);
  function getAmount(moneySource) {
    let expenesTotal = transactionsData.reduce((total, item) => {
      if (
        item.transaction_type == "Expenses" &&
        item.money_source.name == moneySource.name
      ) {
        return (total = total + Number(item.value));
      } else {
        return total;
      }
    }, 0);
    let IncomesTotal = transactionsData.reduce((total, item) => {
      if (
        item.transaction_type == "Incomes" &&
        item.money_source.name == moneySource.name
      ) {
        return (total = total + Number(item.value));
      } else {
        return total;
      }
    }, 0);
    return moneySource.amount - expenesTotal + IncomesTotal;
  }
  const jspdfGenerator = () => {
    const doc = new jsPDF("landscape");
    if (moneySourceData.length != 0) {
      doc.text(`Username: ${moneySourceData[0].author.username}`, 20, 25);
    }

    doc.setFont("helvetica", "bold");
    doc.text(`Beefy Wallet Report`, 125, 50);
    doc.setFontSize(12);
    doc.addImage("/Logo.jpg", "JPEG", 130, 10, 30, 30);
    doc.setFont("courier", "normal");
    doc.text(`Money Sources:`, 20, yPosition);
    yPosition = yPosition + offset;
    moneySourceData.map((item) => {
      doc.text(
        `Money source: ${item.name}, amount: ${getAmount(item)}JOD`,
        25,
        yPosition
      );
      yPosition = yPosition + offset;
    });
    yPosition = yPosition + bigOffset;
    doc.text(`Transactions`, 20, yPosition);
    yPosition = yPosition + offset;
    transactionsData.map((item, index) => {
      doc.text(
        `# ${index} Money source: ${item.money_source.name}, Category: ${item.category}, Value: ${item.value} JOD, Type: ${item.transaction_type}`,
        25,
        yPosition
      );
      yPosition = yPosition + offset;
      doc.text(`Note: ${item.note}`, 25, yPosition);
      yPosition = yPosition + offset;
      if (index % 4 == 0 && index != 0) {
        doc.addPage("a4", "l");
        yPosition = 20;
      }
    });
    //////////////////////
    yPosition = yPosition + bigOffset;
    doc.text(
      `Total amount ${moneySourceData.reduce((total, item) => {
        return (total = total + getAmount(item));
      }, 0)} JOD`,
      20,
      yPosition
    );
    yPosition = yPosition + offset;

    doc.save("data.pdf");
  };
  return (
    <Button
      onClick={jspdfGenerator}
      disableElevation
      variant="contained"

      // color="primary"
    >
      Download Data
    </Button>
  );
};

export default PdfGemerator;
