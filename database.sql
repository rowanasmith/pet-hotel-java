CREATE TABLE "pets" (
   "id" SERIAL PRIMARY KEY,
   "p_name" VARCHAR(100) NOT NULL,
   "p_breed" VARCHAR(100) NOT NULL,
   "p_color" VARCHAR(50) NOT NULL,
   "p_checkIn" Boolean NOT NULL,
    "p_checkIn_date" DATE,
    "P_owner_id" Varchar(10)
    
);

CREATE TABLE "owners" (
   "id" SERIAL PRIMARY KEY,
   "Owner_name" VARCHAR(100) NOT NULL

    
);
DB Name = pet_hotel