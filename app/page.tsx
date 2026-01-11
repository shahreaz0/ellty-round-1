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
        <h2 style={{ marginBottom: "1rem" }}>All Checkbox States</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            padding: "20px",
          }}
        >
          {/* 1. Default unchecked */}
          <Checkbox />

          {/* 2. Default checked */}
          <Checkbox defaultChecked disabled />

          {/* 3. Default checked + focus (keyboard) */}
          <Checkbox defaultChecked autoFocus />

          {/* 4. Primary checked */}
          <Checkbox variant="primary" defaultChecked />

          {/* 5. Primary checked (hover simulated via wrapper class if needed) */}
          <Checkbox variant="primary" defaultChecked />

          {/* 6. Primary checked + active (mousedown – visual only) */}
          <Checkbox variant="primary" defaultChecked />

          {/* 7. Primary checked + disabled */}
          <Checkbox variant="primary" defaultChecked disabled />

          {/* 8. Default checked + disabled */}
          <Checkbox defaultChecked disabled />

          {/* 9. Default unchecked + disabled */}
          <Checkbox disabled />
        </div>
      </section>
    </main>
  );
}
