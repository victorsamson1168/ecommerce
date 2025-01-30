import { JobCurrencyEnum } from '@/types/job';

// PropTypes
type SalaryWithCurrencyProps = {
  /** currency */
  currency: string;
  /** expected salary */
  expectedSalary: number;
};
export default function SalaryWithCurrency(
  props: Readonly<SalaryWithCurrencyProps>
) {
  /** props - state */
  const { currency, expectedSalary } = props;

  /** utitlity function  */
  const getCurrencySymbol = (currency: any) => {
    switch (currency) {
      case JobCurrencyEnum.INR:
        return '₹';
      case JobCurrencyEnum.USD:
        return '$';
      case JobCurrencyEnum.KRW:
        return '원';
      default:
        return '';
    }
  };

  const symbol = getCurrencySymbol(currency);

  return (
    <>
      {currency !== JobCurrencyEnum.KRW && `(${symbol}) `}
      {expectedSalary.toLocaleString()}
      {currency === JobCurrencyEnum.KRW && ` (${symbol})`}
      /Year
    </>
  );
}
