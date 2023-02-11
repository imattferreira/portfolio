'use client';
import { useEffect } from "react";
import { reportWebVitals } from "../../domain/lib/report-webvitals";

function ReportWebVitals() {
  useEffect(() => {
    reportWebVitals();
  }, []);

  return <></>;
}

export default ReportWebVitals;
