import Spacer from "@/components/spacer";
import Text from "@/components/text";
import styles from "@/styles/safearea.module.css";

export default function Blog() {
  return (
    <div className={styles.safe_area}>
      <Text variant="handwriting">Duyuru & Kampanyalar</Text>
      <Text variant="heading">Son Düzenlemeler</Text>
      <Spacer />
    </div>
  );
}