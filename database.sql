CREATE TABLE "owners" (
   "id" SERIAL PRIMARY KEY,
   "Owner_name" VARCHAR(100) NOT NULL
);


CREATE TABLE "pets" (
   "id" SERIAL PRIMARY KEY,
   "p_name" VARCHAR(100) NOT NULL,
   "p_breed" VARCHAR(100) NOT NULL,
   "p_color" VARCHAR(50) NOT NULL,
   "p_checkIn" Boolean NOT NULL DEFAULT false,
    "p_checkIn_date" DATE,
    "p_owner_id" INT REFERENCES "owners"
    
);

DB Name = pet_hotel