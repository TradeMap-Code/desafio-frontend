export interface Stock {
  options: {
    chart: {
      id: string;
      toolbar: {
        show: boolean;
        autoSelected: string
      }
    };
    xaxis: {
      labels: {
        show: boolean
      }
    };
    theme: {
      monochrome: {
        enabled: boolean;
        color: string
      }
    };
    tooltip: {
      x: {
        show: boolean
      };
      marker: {
        show: boolean
      }
    }
  };
  series: {
    name: string;
    data: any;
    price: number;
    variation: number
  }[]
}
