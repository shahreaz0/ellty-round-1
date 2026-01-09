import { Button } from "@/components/ui/button/button";
import { Checkbox } from "@/components/ui/checkbox/checkbox";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <h1 className={styles.title}>Ellty UI Components</h1>

      <section style={{ marginTop: "2rem" }}>
        <h2 style={{ marginBottom: "1rem" }}>Buttons</h2>
        <div style={{ display: "flex", gap: "10px" }}>
          <Button>Done</Button>
          <Button variant="secondary">Done</Button>
        </div>
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h2 style={{ marginBottom: "1rem" }}>Pixel Perfect Checkboxes</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            padding: "20px",
          }}
        >
          <Checkbox />
          <Checkbox variant="lightGray" defaultChecked />
          <Checkbox variant="mediumGray" defaultChecked focused />
          <Checkbox variant="blue" defaultChecked />
          <Checkbox variant="darkBlue" defaultChecked />
          <Checkbox variant="blue" defaultChecked />
          <Checkbox variant="darkBlue" defaultChecked focused />
          <Checkbox variant="lightGray" defaultChecked />
          <Checkbox />
        </div>
      </section>
    </main>
  );
}
