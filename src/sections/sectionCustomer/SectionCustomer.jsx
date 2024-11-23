import { customercard } from "../../api/api";
import { HeaderDescription } from "../../ui/headerDescription/HeaderDescription";
import { HeaderTitle } from "../../ui/headerTitle/HeaderTitle";
import { CustomerCards } from "./components/customerCards/CustomerCards";

export const SectionCustomer = () => {
  return (
    <main className="sectionCustomer">
      <div className="headerContent">
        <HeaderTitle title="What customers say" />
        <HeaderDescription description="Faucibus orci luctus et ultrices posuere cubilia curae." />
      </div>

      <div className="containerCustomerCards">
        {customercard.map((elem) => {
          return <CustomerCards {...elem} key={elem.id} />;
        })}
      </div>
    </main>
  );
};
