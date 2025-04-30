-- User Table
CREATE TABLE "User" (
    UserID SERIAL PRIMARY KEY,
    Username VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL UNIQUE,
    Password VARCHAR(255) NOT NULL,
    Phone VARCHAR(20),
    Address TEXT,
    FirstName VARCHAR(255),
    LastName VARCHAR(255),
    Avatar_url TEXT,
    created_at TIMESTAMPTZ DEFAULT now(),
    modified_at TIMESTAMPTZ DEFAULT now()
);

-- Shops Table
CREATE TABLE Shops (
    ShopID SERIAL PRIMARY KEY,
    UserID INT NOT NULL REFERENCES "User"(UserID) ON DELETE CASCADE,
    ShopName VARCHAR(255) NOT NULL,
    Email VARCHAR(255),
    Phone VARCHAR(20),
    Avatar_url TEXT,
    created_at TIMESTAMPTZ DEFAULT now(),
    modified_at TIMESTAMPTZ DEFAULT now()
);

-- Shop Items Table
CREATE TABLE ShopItems (
    ShopItemID SERIAL PRIMARY KEY,
    ShopID INT NOT NULL REFERENCES Shops(ShopID) ON DELETE CASCADE,
    Name VARCHAR(255) NOT NULL,
    Description TEXT,
    Image_url TEXT,
    Price NUMERIC(10,2) NOT NULL,
    StockQuantity INT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT now(),
    modified_at TIMESTAMPTZ DEFAULT now()
);

-- Favourites Table
CREATE TABLE Favourites (
    Fav_id SERIAL PRIMARY KEY,
    UserID INT REFERENCES "User"(UserID) ON DELETE CASCADE,
    ShopItemID INT REFERENCES ShopItems(ShopItemID) ON DELETE CASCADE
);

-- Orders Table
CREATE TABLE Orders (
    OrderID SERIAL PRIMARY KEY,
    UserID INT REFERENCES "User"(UserID) ON DELETE CASCADE,
    OrderDate TIMESTAMPTZ DEFAULT now(),
    TotalPrice NUMERIC(10,2) NOT NULL,
    PaymentMethod VARCHAR(50),
    ShippingAddress TEXT,
    Status VARCHAR(50)
);

-- Order Items Table
CREATE TABLE OrderItems (
    OrderItemID SERIAL PRIMARY KEY,
    OrderID INT REFERENCES Orders(OrderID) ON DELETE CASCADE,
    ShopItemID INT REFERENCES ShopItems(ShopItemID),
    Quantity INT NOT NULL,
    UnitPrice NUMERIC(10,2) NOT NULL,
    Subtotal NUMERIC(10,2) GENERATED ALWAYS AS (Quantity * UnitPrice) STORED
);

-- Review Table
CREATE TABLE Review (
    ReviewID SERIAL PRIMARY KEY,
    UserID INT REFERENCES "User"(UserID) ON DELETE CASCADE,
    ShopItemID INT REFERENCES ShopItems(ShopItemID),
    Rating INT CHECK (Rating >= 1 AND Rating <= 5),
    Comment TEXT,
    ReviewDate TIMESTAMPTZ DEFAULT now()
);

-- Cart Table
CREATE TABLE Cart (
    CartID SERIAL PRIMARY KEY,
    UserID INT REFERENCES "User"(UserID) ON DELETE CASCADE,
    TotalPrice NUMERIC(10,2),
    created_at TIMESTAMPTZ DEFAULT now(),
    modified_at TIMESTAMPTZ DEFAULT now()
);

-- Cart Items Table
CREATE TABLE CartItems (
    CartItemID SERIAL PRIMARY KEY,
    CartID INT REFERENCES Cart(CartID) ON DELETE CASCADE,
    ShopItemID INT REFERENCES ShopItems(ShopItemID),
    Price NUMERIC(10,2) NOT NULL,
    Quantity INT NOT NULL
);
