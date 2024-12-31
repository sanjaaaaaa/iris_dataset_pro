// Dummy classifier function (replace this with a real model)
function classifyIris(sepalLength, sepalWidth, petalLength, petalWidth) {
    // Simplified classifier logic (this should be replaced with an actual model)
    if (petalLength < 2) return "Setosa";
    if (petalLength < 5) return "Versicolor";
    return "Virginica";
  }
  
  function classifyAndCompare() {
    // Get values from inputs
    const sepalLength1 = parseFloat(
      document.getElementById("sepalLength1").value
    );
    const sepalWidth1 = parseFloat(document.getElementById("sepalWidth1").value);
    const petalLength1 = parseFloat(
      document.getElementById("petalLength1").value
    );
    const petalWidth1 = parseFloat(document.getElementById("petalWidth1").value);
  
    const sepalLength2 = parseFloat(
      document.getElementById("sepalLength2").value
    );
    const sepalWidth2 = parseFloat(document.getElementById("sepalWidth2").value);
    const petalLength2 = parseFloat(
      document.getElementById("petalLength2").value
    );
    const petalWidth2 = parseFloat(document.getElementById("petalWidth2").value);
  
    // Classify the data points
    const class1 = classifyIris(
      sepalLength1,
      sepalWidth1,
      petalLength1,
      petalWidth1
    );
    const class2 = classifyIris(
      sepalLength2,
      sepalWidth2,
      petalLength2,
      petalWidth2
    );
  
    // Display the results
    document.getElementById("classification1").innerText = `Class 1: ${class1}`;
    document.getElementById("classification2").innerText = `Class 2: ${class2}`;
  
    // Display the comparison chart
    displayChart(
      sepalLength1,
      sepalWidth1,
      petalLength1,
      petalWidth1,
      sepalLength2,
      sepalWidth2,
      petalLength2,
      petalWidth2
    );
  }
  
  function displayChart(
    sepalLength1,
    sepalWidth1,
    petalLength1,
    petalWidth1,
    sepalLength2,
    sepalWidth2,
    petalLength2,
    petalWidth2
  ) {
    const ctx = document.getElementById("comparisonChart").getContext("2d");
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Sepal Length", "Sepal Width", "Petal Length", "Petal Width"],
        datasets: [
          {
            label: "Data Point 1",
            data: [sepalLength1, sepalWidth1, petalLength1, petalWidth1],
            backgroundColor: "rgba(54, 162, 235, 0.5)"
          },
          {
            label: "Data Point 2",
            data: [sepalLength2, sepalWidth2, petalLength2, petalWidth2],
            backgroundColor: "rgba(255, 99, 132, 0.5)"
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
  