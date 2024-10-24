const Card = ({ children }: { children?: React.ReactNode }) => {
  return <article className="card">{children}</article>;
};

const CardBody = ({ children }: { children?: React.ReactNode }) => {
  return <div className="card-body">{children}</div>;
};

const CardFooter = ({
  children,
  backgroundColor,
}: {
  children?: React.ReactNode;
  backgroundColor?: string;
}) => {
  return (
    <div
      className="card-footer"
      {...(backgroundColor && { style: { backgroundColor } })}
    >
      {children}
    </div>
  );
};

Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;
