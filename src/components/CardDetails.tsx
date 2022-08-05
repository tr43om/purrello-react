export const CardDetails = ({ title }: CardDetailsType) => {
  return <div>{title}</div>;
};

type CardDetailsType = {
  title: string;
};
