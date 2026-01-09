import { Button } from "@/components/ui/button/button";
import styles from "./page.module.css";
// import { Button } from "@/components/ui/button/button";

export default function Home() {
  return (
    <main className={styles.page}>
      <h1 className={styles.title}>Ellty Button Variants</h1>

      <div
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        <Button>Done</Button>
        <Button variant="secondary">Done</Button>
      </div>
    </main>
  );
}
