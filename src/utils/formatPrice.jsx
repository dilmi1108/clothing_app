/**
 * Format utilities for the e-commerce application
 * Handles currency, numbers, dates, and other formatting needs
 */

/**
 * Formats a price in Sri Lankan Rupees with proper locale formatting
 */
export const formatPrice = (price) => {
  if (typeof price !== "number" || isNaN(price)) {
    return "Rs. 0.00";
  }

  return `Rs. ${price.toLocaleString("en-LK", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
};

/**
 * Formats a price without currency symbol
 */
export const formatPriceOnly = (price) => {
  if (typeof price !== "number" || isNaN(price)) {
    return "0.00";
  }

  return price.toLocaleString("en-LK", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

/**
 * Formats a discount percentage
 */
export const formatDiscount = (originalPrice, discountedPrice) => {
  if (
    originalPrice <= 0 ||
    discountedPrice < 0 ||
    discountedPrice >= originalPrice
  ) {
    return "0%";
  }

  const discount = ((originalPrice - discountedPrice) / originalPrice) * 100;
  return `${Math.round(discount)}%`;
};

/**
 * Formats a number with proper thousand separators
 */
export const formatNumber = (num) => {
  if (typeof num !== "number" || isNaN(num)) {
    return "0";
  }

  return num.toLocaleString("en-LK");
};

/**
 * Formats tax amount with proper currency formatting
 */
export const formatTax = (amount, rate) => {
  const taxAmount = amount * rate;
  return formatPrice(taxAmount);
};

/**
 * Formats shipping cost with free shipping logic
 */
export const formatShipping = (cost) => {
  if (cost === 0) {
    return "Free";
  }
  return formatPrice(cost);
};

/**
 * Calculates and formats savings amount
 */
export const formatSavings = (originalPrice, currentPrice) => {
  const savings = originalPrice - currentPrice;
  if (savings <= 0) {
    return "";
  }
  return `You save ${formatPrice(savings)}`;
};

/**
 * Formats quantity with proper pluralization
 */
export const formatQuantity = (
  quantity,
  singular = "item",
  plural = "items"
) => {
  return `${formatNumber(quantity)} ${quantity === 1 ? singular : plural}`;
};

/**
 * Formats size display for clothing items
 */
export const formatSize = (size) => {
  return `Size ${size}`;
};

/**
 * Formats product availability status
 */
export const formatAvailability = (inStock, quantity) => {
  if (!inStock) {
    return "Out of Stock";
  }

  if (quantity !== undefined) {
    if (quantity <= 5) {
      return `Only ${quantity} left in stock`;
    }
    return "In Stock";
  }

  return "In Stock";
};

/**
 * Formats order status for display
 */
export const formatOrderStatus = (status) => {
  const statusMap = {
    pending: "Order Pending",
    processing: "Processing",
    shipped: "Shipped",
    delivered: "Delivered",
    cancelled: "Cancelled",
    refunded: "Refunded",
  };

  return statusMap[status.toLowerCase()] || status;
};

/**
 * Formats date for display in Sri Lankan context
 */
export const formatDate = (date) => {
  const dateObj = typeof date === "string" ? new Date(date) : date;

  return dateObj.toLocaleDateString("en-LK", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

/**
 * Formats date and time for display
 */
export const formatDateTime = (date) => {
  const dateObj = typeof date === "string" ? new Date(date) : date;

  return dateObj.toLocaleString("en-LK", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

/**
 * Formats phone number for Sri Lankan format
 */
export const formatPhoneNumber = (phone) => {
  const cleaned = phone.replace(/\D/g, "");

  if (cleaned.startsWith("0") && cleaned.length === 10) {
    const withoutZero = cleaned.substring(1);
    return `+94 ${withoutZero.substring(0, 2)} ${withoutZero.substring(
      2,
      5
    )} ${withoutZero.substring(5)}`;
  }

  if (cleaned.startsWith("94") && cleaned.length === 11) {
    const number = cleaned.substring(2);
    return `+94 ${number.substring(0, 2)} ${number.substring(
      2,
      5
    )} ${number.substring(5)}`;
  }

  return phone;
};

/**
 * Formats email for display (masks part of email for privacy)
 */
export const formatEmailMask = (email) => {
  const [username, domain] = email.split("@");
  if (!username || !domain) return email;

  const maskedUsername =
    username.charAt(0) + "*".repeat(Math.max(0, username.length - 1));
  return `${maskedUsername}@${domain}`;
};

/**
 * Formats file size for display
 */
export const formatFileSize = (bytes) => {
  if (bytes === 0) return "0 Bytes";

  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return (
    parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + " " + sizes[i]
  );
};

/**
 * Truncates text with ellipsis
 */
export const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + "...";
};

/**
 * Formats product rating for display
 */
export const formatRating = (rating, maxRating = 5) => {
  return `${rating.toFixed(1)}/${maxRating}`;
};

/**
 * Formats review count with proper pluralization
 */
export const formatReviewCount = (count) => {
  return formatQuantity(count, "review", "reviews");
};

// Export all formatting functions as a single object for easier importing
export const formatters = {
  price: formatPrice,
  priceOnly: formatPriceOnly,
  discount: formatDiscount,
  number: formatNumber,
  tax: formatTax,
  shipping: formatShipping,
  savings: formatSavings,
  quantity: formatQuantity,
  size: formatSize,
  availability: formatAvailability,
  orderStatus: formatOrderStatus,
  date: formatDate,
  dateTime: formatDateTime,
  phoneNumber: formatPhoneNumber,
  emailMask: formatEmailMask,
  fileSize: formatFileSize,
  truncateText: truncateText,
  rating: formatRating,
  reviewCount: formatReviewCount,
};

export default formatters;
