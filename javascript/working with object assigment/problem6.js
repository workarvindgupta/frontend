// 


// answer 


function main() {
    let yearData = {};
  
    const createPerYearData = (year, total) => {
      yearData[year] = total;
    };
  
    const printReport = () => {
      console.log("Print Report");
    };
  
    const calculateTotalTillDate = (perYearBalance) => {
      let total = perYearBalance.reduce((acc, balance) => acc + balance, 0);
      return total;
    };
  
    const adjustTotalOfYear = (year, adjustmentFactor) => {
      yearData[year] *= adjustmentFactor;
    };
  
    return {
      createPerYearData,
      printReport,
      calculateTotalTillDate,
      adjustTotalOfYear
    };
  }