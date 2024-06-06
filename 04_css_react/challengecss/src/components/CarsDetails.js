import styles from "./CarsDetails.module.css";

const CarsDetails = ({ name, brand, color }) => {
  return (
    <div className={styles.card}>
      <h2>{name}</h2>
      <p>Marca: {brand}</p>
      <p>Cor: {color}</p>
    </div>
  );
};

export default CarsDetails;
