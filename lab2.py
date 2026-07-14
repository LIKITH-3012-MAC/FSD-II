import cv2
import numpy as np
import matplotlib.pyplot as plt

# Load image (change path if needed)
image = cv2.imread('tr.jpeg')  # Replace 'input.jpg' with your image file
if image is None:
    raise FileNotFoundError("Image not found. Make sure 'input.jpg' is in the directory.")

# Convert to grayscale
gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

# ----------------------------
# SOBEL EDGE DETECTION
# ----------------------------
# Apply Sobel operator on grayscale
sobelx_gray = cv2.Sobel(gray, cv2.CV_64F, 1, 0, ksize=3)
sobely_gray = cv2.Sobel(gray, cv2.CV_64F, 0, 1, ksize=3)
sobel_gray = cv2.magnitude(sobelx_gray, sobely_gray)

# Apply Sobel operator on each color channel
channels = cv2.split(image)
sobel_color = []
for ch in channels:
    sobelx = cv2.Sobel(ch, cv2.CV_64F, 1, 0, ksize=3)
    sobely = cv2.Sobel(ch, cv2.CV_64F, 0, 1, ksize=3)
    sobel = cv2.magnitude(sobelx, sobely)
    sobel_color.append(sobel)

sobel_color_merged = cv2.merge(sobel_color)

# ----------------------------
# CANNY EDGE DETECTION
# ----------------------------
# On grayscale
canny_gray = cv2.Canny(gray, 100, 200)

# On color image (apply per channel and combine)
canny_channels = [cv2.Canny(ch, 100, 200) for ch in channels]
canny_color = cv2.merge(canny_channels)

# ----------------------------
# DISPLAY RESULTS
# ----------------------------
plt.figure(figsize=(12, 10))

plt.subplot(3, 2, 1)
plt.title("Original Image")
plt.imshow(cv2.cvtColor(image, cv2.COLOR_BGR2RGB))
plt.axis('off')

plt.subplot(3, 2, 2)
plt.title("Grayscale Image")
plt.imshow(gray, cmap='gray')
plt.axis('off')

plt.subplot(3, 2, 3)
plt.title("Sobel on Grayscale")
plt.imshow(sobel_gray, cmap='gray')
plt.axis('off')

plt.subplot(3, 2, 4)
plt.title("Sobel on Color")
plt.imshow(np.uint8(np.clip(sobel_color_merged, 0, 255)))
plt.axis('off')

plt.subplot(3, 2, 5)
plt.title("Canny on Grayscale")
plt.imshow(canny_gray, cmap='gray')
plt.axis('off')

plt.subplot(3, 2, 6)
plt.title("Canny on Color")
plt.imshow(cv2.cvtColor(canny_color, cv2.COLOR_BGR2RGB))
plt.axis('off')

plt.tight_layout()
plt.show()

