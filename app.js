// https://calculator.swiftutors.com/operating-cash-flow-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const operatingCashFlowRadio = document.getElementById('operatingCashFlowRadio');
const EBITRadio = document.getElementById('EBITRadio');
const depreciationRadio = document.getElementById('depreciationRadio');
const taxesRadio = document.getElementById('taxesRadio');

let operatingCashFlow;
let EBIT = v1;
let depreciation = v2;
let taxes = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

operatingCashFlowRadio.addEventListener('click', function() {
  variable1.textContent = 'EBIT (Earnings Before Interest and Taxes)';
  variable2.textContent = 'Depreciation';
  variable3.textContent = 'Taxes';
  EBIT = v1;
  depreciation = v2;
  taxes = v3;
  result.textContent = '';
});

EBITRadio.addEventListener('click', function() {
  variable1.textContent = 'Operating Cash Flow';
  variable2.textContent = 'Depreciation';
  variable3.textContent = 'Taxes';
  operatingCashFlow = v1;
  depreciation = v2;
  taxes = v3;
  result.textContent = '';
});

depreciationRadio.addEventListener('click', function() {
  variable1.textContent = 'Operating Cash Flow';
  variable2.textContent = 'EBIT (Earnings Before Interest and Taxes)';
  variable3.textContent = 'Taxes';
  operatingCashFlow = v1;
  EBIT = v2;
  taxes = v3;
  result.textContent = '';
});

taxesRadio.addEventListener('click', function() {
  variable1.textContent = 'Operating Cash Flow';
  variable2.textContent = 'EBIT (Earnings Before Interest and Taxes)';
  variable3.textContent = 'Depreciation';
  operatingCashFlow = v1;
  EBIT = v2;
  depreciation = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(operatingCashFlowRadio.checked)
    result.textContent = `Operating Cash Flow = ${computeOperatingCashFlow().toFixed(2)}`;

  else if(EBITRadio.checked)
    result.textContent = `EBIT = ${computeEBIT().toFixed(2)}`;

  else if(depreciationRadio.checked)
    result.textContent = `Depreciation = ${computeDepreciation().toFixed(2)}`;

  else if(taxesRadio.checked)
    result.textContent = `Taxes = ${computeTaxes().toFixed(2)}`;
})

// calculation

function computeOperatingCashFlow() {
  return Number(EBIT.value) + Number(depreciation.value) - Number(taxes.value);
}

function computeEBIT() {
  return Number(operatingCashFlow.value) - Number(depreciation.value) + Number(taxes.value);
}

function computeDepreciation() {
  return Number(operatingCashFlow.value) - Number(EBIT.value) + Number(taxes.value);
}

function computeTaxes() {
  return Number(EBIT.value) + Number(depreciation.value) - Number(operatingCashFlow.value);
}