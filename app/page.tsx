import { Button } from "@/components/ui/button/button";
import { Card } from "@/components/ui/card/card";
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

      {/* <section
        style={{
          marginTop: "2rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <h2 style={{ marginBottom: "1rem" }}>Page Selection List</h2>

        <Card>
          <span className="text">All pages</span>
          <Checkbox className="checkbox-sm" />
        </Card>

        <Card>
          <span className="text">All pages</span>
          <Checkbox variant="mediumGray" defaultChecked focused className="checkbox-sm" />
        </Card>

        <Card>
          <span className="text">All pages</span>
          <Checkbox variant="blue" defaultChecked />
        </Card>

        <Card>
          <span className="text">All pages</span>
          <Checkbox variant="darkBlue" defaultChecked />
        </Card>

        <Card>
          <span className="text">All pages</span>
          <Checkbox variant="blue" defaultChecked />
        </Card>

        <Card>
          <span className="text">All pages</span>
          <Checkbox variant="darkBlue" defaultChecked />
        </Card>

        <Card>
          <span className="text">All pages</span>
          <Checkbox variant="lightGray" defaultChecked />
        </Card>
      </section> */}

      <section style={{ marginTop: "2rem" }}>
        <h2 style={{ marginBottom: "1rem" }}>Checkbox Verification (8 States)</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            padding: "20px",
            background: "#f9fafb",
            borderRadius: "8px",
            border: "1px solid #e5e7eb",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Checkbox id="state-1" />
            <span>1. Unchecked</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Checkbox id="state-2" />
            <span>2. Unchecked (Hover me)</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Checkbox id="state-3" />
            <span>3. Unchecked (Focus me via Tab)</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Checkbox id="state-4" defaultChecked />
            <span>4. Checked (Hover me)</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Checkbox id="state-5" defaultChecked />
            <span>5. Checked</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Checkbox id="state-7" defaultChecked />
            <span>7. Checked (Focus me via Tab)</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Checkbox id="state-8-checked" defaultChecked disabled />
            <span>8. Disabled (Checked)</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Checkbox id="state-8-unchecked" disabled />
            <span>8. Disabled (Unchecked)</span>
          </div>
        </div>
      </section>
    </main>
  );
}
