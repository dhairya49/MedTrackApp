# MedTrack – Smart Prescription & Medicine Vending App  
*A complete prototype for medicine access, vending machine integration, and digital prescriptions.*

MedTrack is a modern mobile application that allows users to scan prescriptions, check medicine availability, browse OTC medicines, process payments, and interact with smart vending machines via QR codes.  
This project was built for a college-level showcase but follows a professional architecture, clean UI, and an expandable backend-friendly design.

---

## 📱 Features

### 👤 **User Features**
- View all prescriptions uploaded by assigned doctors  
- Open a prescription and scan QR to verify & collect medicines  
- Upload prescription images for verification (UI only)  
- Browse OTC medicines with product details  
- Add items to cart  
- Checkout and see price breakdown  
- Pay using mock payment UI (ready for Razorpay integration)  
- View nearby vending machines on a map  
- Scan QR codes from vending machines  
- Dark-mode optimized UI throughout  

### 👨‍⚕️ **Doctor Features (Planned)**
- Assign prescriptions to patients  
- View patient history  
- Approve or decline uploaded prescriptions  

---

## 🛠 Tech Stack

### **Frontend (Mobile App)**
- **React Native**
- **Expo (Managed Workflow)**
- **Expo Router** (File-based navigation)
- **Expo Barcode Scanner**
- **TypeScript**

### **Backend (Optional)**
> This project is frontend-ready and backend-agnostic.  
> Integration with Firebase, Node.js, or custom APIs can be added later.

---

## 📂 Project Structure

```

MedTrackApp/
│
├── app/                       # Expo Router screens
│   ├── (tabs)/                # Tab navigation (Home, Machines, Prescriptions, Profile)
│   ├── browse-medicine/       # OTC medicine listing + product details
│   ├── scan-qr/               # QR Scanner screen
│   ├── upload-prescription/   # Upload prescription UI
│   ├── cart/                  # User cart
│   ├── checkout/              # Payment screen
│   └── orders/                # Order history (optional)
│
├── components/                # Reusable UI components
├── assets/                    # Logos, icons, splash images
├── constants/                 # Theme values
├── hooks/                     # Color scheme helpers
├── scripts/                   # Project reset helpers
└── configuration files…

````

---

## 🚀 How to Run the Project

### **1. Install Dependencies**
Make sure you have Node.js installed, then:

```sh
npm install
````

### **2. Install Expo CLI**

```
npm install -g expo-cli
```

### **3. Start the App**

```
npx expo start
```

This will open the Metro Bundler in your browser.

### **4. Run on a Device**

You have two options:

#### 📱 **On Android (Recommended)**

1. Install **Expo Go** from Play Store
2. Open Expo Go
3. Scan the QR code from Metro Bundler
4. App will launch instantly

#### 🍎 **On iOS**

1. Install **Expo Go** from App Store
2. Scan the QR from the browser
3. App will open on your iPhone

---

## 🧪 Testing QR Scanning

1. Go to **Home → Scan QR**
2. Allow camera permissions
3. Scan any QR code
4. The app will redirect you to **Checkout** (temporary logic)

Later this can be replaced with:

* Machine ID recognition
* Prescription binding
* Live stock validation

---

## 💊 Browsing OTC Medicines

* Navigate to **Browse OTC Medicines**
* Tap any product to open details
* Products marked as **Prescription Required** will redirect to the upload screen

---

## 📄 Understanding the Prescription Flow

1. **User opens Prescriptions tab**
2. **Selects a prescription**
3. Inside details → Option to **Scan QR at vending machine**
4. QR ensures user only collects medicines assigned in that prescription
5. Future backend integration will handle:

   * Verification
   * Validation
   * Stock availability
   * Auto billing

---

## 🔧 Future Enhancements (Recommended)

* 🔐 Firebase Authentication (Google login)
* 🩺 Doctor Portal to upload prescriptions
* 🧾 Auto-generated receipt in PDF format
* 📍 Real vending machine tracking using actual API
* 💳 Real Razorpay payment integration
* 📦 Live cart management with backend sync

---

## 👨‍💻 Developer Notes

* The app uses **Expo Router**, so navigation is based on folder structure.
* All screens are designed with **dark UI** for consistency.
* Backend is left open so any stack (Firebase / Node.js / Django) can be plugged in later.

---

## 📬 Contact

If you need help modifying or extending this project, feel free to contact the developer.

---

# 🌟 Thank you for using MedTrack!

A modern solution to simplify medicine access through automation, smart vending machines, and clean digital health workflows.

```

---

# ✅ Your README is ready for GitHub.

If you want, I can also:
- add badges (Expo/React Native/License)  
- add emojis and banners  
- auto-generate screenshots section  
- create a LICENSE file  
- create a professional description for the GitHub repo  

Just tell me **"add badges"** or **"add screenshots section"**.
```
