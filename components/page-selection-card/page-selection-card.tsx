"use client";
import { useState } from "react";
import { Button } from "../ui/button/button";
import { PageItem } from "./page-item";
import styles from "./page-selection-card.module.css";

const PAGES = ["Page 1", "Page 2", "Page 3", "Page 4", "Page 5", "Page 6"];

export function PageSelectionCard() {
  const [selectedPages, setSelectedPages] = useState<string[]>([]);

  const isAllSelected = selectedPages.length === PAGES.length;

  function handleSelectAll(checked: boolean) {
    setSelectedPages(checked ? [...PAGES] : []);
  }

  function handleSelectPage(page: string, checked: boolean) {
    setSelectedPages((prev) =>
      checked ? [...prev, page] : prev.filter((p) => p !== page)
    );
  }

  return (
    <section className={styles.container}>
      <div className={styles.list}>
        <PageItem page="All pages" checked={isAllSelected} onChange={handleSelectAll} />
        <div className={styles.divider} />
        <div className={styles.scrollArea}>
          {PAGES.map((page) => (
            <PageItem
              key={page}
              page={page}
              checked={selectedPages.includes(page)}
              onChange={(checked) => handleSelectPage(page, checked)}
            />
          ))}
        </div>
        <div className={styles.divider} />
      </div>
      <div className={styles.footer}>
        <Button>Done</Button>
      </div>
    </section>
  );
}
