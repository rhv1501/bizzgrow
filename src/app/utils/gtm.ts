"use client";

type GtmEventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export const CONTACT_SUCCESS_FLAG = "bizzgrow_contact_form_success";

export function pushGtmEvent(
  eventName: string,
  params: GtmEventParams = {},
) {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    ...params,
  });
}

export function markContactSuccess() {
  if (typeof window === "undefined") return;

  sessionStorage.setItem(
    CONTACT_SUCCESS_FLAG,
    JSON.stringify({
      at: Date.now(),
    }),
  );
}

export function consumeContactSuccessFlag() {
  if (typeof window === "undefined") return false;

  const value = sessionStorage.getItem(CONTACT_SUCCESS_FLAG);
  if (!value) return false;

  sessionStorage.removeItem(CONTACT_SUCCESS_FLAG);
  return true;
}

export function trackLeadFormSuccess(params: {
  formName?: string;
  pagePath?: string;
  service?: string | null;
}) {
  pushGtmEvent("generate_lead", {
    form_name: params.formName ?? "contact_form",
    form_location: params.pagePath ?? "/contact",
    service_name: params.service ?? undefined,
    lead_type: "contact_form",
    conversion_source: "website",
  });
}

export function trackCallNowClick(params: {
  location?: string;
  pagePath?: string;
}) {
  pushGtmEvent("click_to_call", {
    click_location: params.location ?? "unknown",
    page_path: params.pagePath ?? undefined,
    conversion_source: "website",
    call_destination: "+918939036141",
  });
}