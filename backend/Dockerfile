# FROM node:20-alpine

# WORKDIR /app

# COPY package*.json ./
# RUN npm install

# COPY . .

# EXPOSE 4000

# CMD ["npm", "run", "dev"]


FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# קימפול קובצי ה-TypeScript לתוך תיקיית dist
RUN npm run build

EXPOSE 4000

# הרצת הקוד המקומפל במצב ייצור
CMD ["npm", "start"]