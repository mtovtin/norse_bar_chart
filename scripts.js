  let json = `[
        {
          "day": "mon",
          "amount": 17.45
        },
        {
          "day": "tue",
          "amount": 34.91
        },
        {
          "day": "wed",
          "amount": 52.36
        },
        {
          "day": "thu",
          "amount": 31.07
        },
        {
          "day": "fri",
          "amount": 23.39
        },
        {
          "day": "sat",
          "amount": 43.28
        },
        {
          "day": "sun",
          "amount": 25.48
        }
    ]`;



  var mydata = JSON.parse(json);
  var xValues = [mydata[0].day, mydata[1].day, mydata[2].day, mydata[3].day, mydata[4].day, mydata[5].day, mydata[6].day];
  var yValues = [mydata[0].amount, mydata[1].amount, mydata[2].amount, mydata[3].amount, mydata[4].amount, mydata[5].amount, mydata[6].amount];
  let backgroundColors;
  let hoverBackgroundColors;
  const todaysDate = new Date();
  let day = todaysDate.getDay();
  console.log(day)
  switch (day) {
      case 1:
          hoverBackgroundColors = ['hsl(186, 34%, 80%)', 'hsl(10, 79%, 75%)', 'hsl(10, 79%, 75%)', 'hsl(10, 79%, 75%)', 'hsl(10, 79%, 75%)', 'hsl(10, 79%, 75%)', 'hsl(10, 79%, 75%)'];
          backgroundColors = ['hsl(186, 34%, 60%)', 'hsl(10, 79%, 65%)', 'hsl(10, 79%, 65%)', 'hsl(10, 79%, 65%)', 'hsl(10, 79%, 65%)', 'hsl(10, 79%, 65%)', 'hsl(10, 79%, 65%)'];
          break;
      case 2:
          hoverBackgroundColors = ['hsl(10, 79%, 75%)', 'hsl(186, 34%, 80%)', 'hsl(10, 79%, 75%)', 'hsl(10, 79%, 75%)', 'hsl(10, 79%, 75%)', 'hsl(10, 79%, 75%)', 'hsl(10, 79%, 75%)'];
          backgroundColors = ['hsl(10, 79%, 65%)', 'hsl(186, 34%, 60%)', 'hsl(10, 79%, 65%)', 'hsl(10, 79%, 65%)', 'hsl(10, 79%, 65%)', 'hsl(10, 79%, 65%)', 'hsl(10, 79%, 65%)'];
          break;
      case 3:
          hoverBackgroundColors = ['hsl(10, 79%, 75%)', 'hsl(10, 79%, 75%)', 'hsl(186, 34%, 80%)', 'hsl(10, 79%, 75%)', 'hsl(10, 79%, 75%)', 'hsl(10, 79%, 75%)', 'hsl(10, 79%, 75%)'];
          backgroundColors = ['hsl(10, 79%, 65%)', 'hsl(10, 79%, 65%)', 'hsl(186, 34%, 60%)', 'hsl(10, 79%, 65%)', 'hsl(10, 79%, 65%)', 'hsl(10, 79%, 65%)', 'hsl(10, 79%, 65%)'];
          break;
      case 4:
          hoverBackgroundColors = ['hsl(10, 79%, 75%)', 'hsl(10, 79%, 75%)', 'hsl(10, 79%, 75%)', 'hsl(186, 34%, 80%)', 'hsl(10, 79%, 75%)', 'hsl(10, 79%, 75%)', 'hsl(10, 79%, 75%)'];
          backgroundColors = ['hsl(10, 79%, 65%)', 'hsl(10, 79%, 65%)', 'hsl(10, 79%, 65%)', 'hsl(186, 34%, 60%)', 'hsl(10, 79%, 65%)', 'hsl(10, 79%, 65%)', 'hsl(10, 79%, 65%)'];
          break;
      case 5:
          hoverBackgroundColors = ['hsl(10, 79%, 75%)', 'hsl(10, 79%, 75%)', 'hsl(10, 79%, 75%)', 'hsl(10, 79%, 75%)', 'hsl(186, 34%, 80%)', 'hsl(10, 79%, 75%)', 'hsl(10, 79%, 75%)'];
          backgroundColors = ['hsl(10, 79%, 65%)', 'hsl(10, 79%, 65%)', 'hsl(10, 79%, 65%)', 'hsl(10, 79%, 65%)', 'hsl(186, 34%, 60%)', 'hsl(10, 79%, 65%)', 'hsl(10, 79%, 65%)'];
          break;
      case 6:
          hoverBackgroundColors = ['hsl(10, 79%, 75%)', 'hsl(10, 79%, 75%)', 'hsl(10, 79%, 75%)', 'hsl(10, 79%, 75%)', 'hsl(10, 79%, 75%)', 'hsl(186, 34%, 80%)', 'hsl(10, 79%, 75%)'];
          backgroundColors = ['hsl(10, 79%, 65%)', 'hsl(10, 79%, 65%)', 'hsl(10, 79%, 65%)', 'hsl(10, 79%, 65%)', 'hsl(10, 79%, 65%)', 'hsl(186, 34%, 60%)', 'hsl(10, 79%, 65%)'];
          break;
      case 7:
          hoverBackgroundColors = ['hsl(10, 79%, 75%)', 'hsl(10, 79%, 75%)', 'hsl(10, 79%, 75%)', 'hsl(10, 79%, 75%)', 'hsl(10, 79%, 75%)', 'hsl(10, 79%, 75%)', 'hsl(186, 34%, 80%)'];
          backgroundColors = ['hsl(10, 79%, 65%)', 'hsl(10, 79%, 65%)', 'hsl(10, 79%, 65%)', 'hsl(10, 79%, 65%)', 'hsl(10, 79%, 65%)', 'hsl(10, 79%, 65%)', 'hsl(186, 34%, 60%)'];
          break;

  }


  new Chart("myChart", {
      type: "bar",

      data: {
          labels: xValues,
          datasets: [{
              backgroundColor: backgroundColors,
              data: yValues,
              borderRadius: 5,
              borderWidth: 1,
              borderSkipped: false,
              hoverBackgroundColor: hoverBackgroundColors

          }]
      },
      options: {

          plugins: {
              tooltip: {
                  callbacks: {
                      label: function (context) {
                          let label = context.dataset.label || '';

                          if (label) {
                              label += ': ';
                          }
                          if (context.parsed.y !== null) {
                              label += new Intl.NumberFormat('en-US', {
                                  style: 'currency',
                                  currency: 'USD'
                              }).format(context.parsed.y);
                          }
                          return label;
                      }
                  },
                  enabled: true,
                  titleAlign: 'center',
                  displayColors: false,
                  xAlign: 'center',
                  yAlign: 'center',

              },
              legend: {
                  display: false
              },
          },
          scales: {
              y: {
                  beginAtZero: true,
                  ticks: {
                      display: false
                  },
                  grid: {
                      borderColor: 'green',
                      drawOnChartArea: false,
                      borderWidth: 3,
                      drawBorder: false,
                      display: false,
                      drawTicks: false
                  }
              },
              x: {
                  ticks: {
                      color: 'hsl(28, 10%, 53%)'
                  },
                  grid: {
                      drawBorder: false,
                      drawOnChartArea: false,
                      display: false,
                      lineWidth: 5,
                  }
              }
          },
      }

  });