// Checkpoint A — your work goes in this file.
//
// Read checkpoint-a/spec.md. It was written for your GitHub account and it is
// the only description of the task that matters.
//
// Check your work with:  npm test a

import { findAllOrders, findOrderById } from "./orders-db.js";

export async function loadOrders() {
  return findAllOrders();
}

export function myOrders(orders) {
  return orders.filter(
    (order) => order.city === "Alexandria" && order.status === "cancelled"
  );
}

export function summarize(orders) {
  return orders.reduce((total, order) => total + order.price * order.quantity, 0);
}

export async function describeOrder(id) {
  try {
    const order = await findOrderById(id);
    return `${order.quantity} x ${order.item} for ${order.student}`;
  } catch {
    return `Missing order: ${id}`;
  }
}

export function toJsonLines(orders) {
  return JSON.stringify(orders.map(({ item, quantity }) => ({ item, quantity })));
}
