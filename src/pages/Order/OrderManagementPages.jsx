import React from 'react';
import OrderManagement from './OrderManagement.jsx';
import { useSelector } from 'react-redux';

const PendingOrders = () => {
  const { user } = useSelector(state => state.auth);
  const userId = user?._id || '';
  return <OrderManagement status="pending" title="Pending" vendorId={userId} />;
};

const ConfirmedOrders = () => {
  const { user } = useSelector(state => state.auth);
  const userId = user?._id || '';
  return <OrderManagement status="confirmed" title="Confirmed" vendorId={userId} />;
};

const DeliveredOrders = () => {
  const { user } = useSelector(state => state.auth);
  const userId = user?._id || '';
  return <OrderManagement status="delivered" title="Delivered" vendorId={userId} />;
};

const PackagingOrders = () => {
  const { user } = useSelector(state => state.auth);
  const userId = user?._id || '';
  return <OrderManagement status="packaging" title="Packaging" vendorId={userId} />;
};

const OutForDeliveryOrders = () => {
  const { user } = useSelector(state => state.auth);
  const userId = user?._id || '';
  return <OrderManagement status="out_for_delivery" title="Out for Delivery" vendorId={userId} />;
};

const FailedToDeliverOrders = () => {
  const { user } = useSelector(state => state.auth);
  const userId = user?._id || '';
  return <OrderManagement status="failed_to_deliver" title="Failed to Deliver" vendorId={userId} />;
};

const ReturnedOrders = () => {
  const { user } = useSelector(state => state.auth);
  const userId = user?._id || '';
  return <OrderManagement status="returned" title="Returned" vendorId={userId} />;
};

const CanceledOrders = () => {
  const { user } = useSelector(state => state.auth);
  const userId = user?._id || '';
  return <OrderManagement status="canceled" title="Canceled" vendorId={userId} />;
};

export {
  PendingOrders,
  ConfirmedOrders,
  DeliveredOrders,
  PackagingOrders,
  OutForDeliveryOrders,
  FailedToDeliverOrders,
  ReturnedOrders,
  CanceledOrders
};
