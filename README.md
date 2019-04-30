# Poxnora Search Engine
Search engine to search/filter runes in Poxnora built as a MEHN(MongoDB, Express, Handlebars, Node) application.

## Technologies and Frameworks Used
#### **Bootstrap**
#### **Heroku**
#### **JQuery**
#### **Handlebars(hbs)**
#### **ExpressJS**
#### **method-override**
#### **mLab**
#### **MongoDB**
#### **Mongo Shell**
#### **Mongoose**
#### **Javascript, HTML, CSS**

## Tools Used
#### Github Projects
#### MonggoDB Compass
<https://www.mongodb.com/products/compass>
#### ReText
<https://github.com/retext-project/retext>

## Prerequisites
### NodeJS
<https://nodejs.org/en/>

## To Test On Local Machine
1. Run `npm i` in node terminal to download all the dependencies
2. Navigate to the JSON directory in project
3. Run these commands to seed the mongo database:
```
mongoimport --db poxnora-database --collection champions --file champs.json --jsonArray
mongoimport --db poxnora-database --collection spells --file spells.json --jsonArray
mongoimport --db poxnora-database --collection relics --file relics.json --jsonArray
mongoimport --db poxnora-database --collection equips --file equips.json --jsonArray
```
4. Run `node server.js`
5. Navigate to <http://localhost:3000/> to test the code.

## Whiteboarding
### Entity Relationship Diagram
![No Image Found](images/er.jpg)

## Wireframe
![No Image Found](images/wireframe.jpg)
### Wireframe for error route
![No Image Found](images/error.jpg)

## Website/App Link
<https://secure-dusk-71733.herokuapp.com/>

## Project Board
### Github Projects
<https://github.com/DjMikeLin/PoxnoraSearchEngine/projects/1>

## References
### JSON used to create MongoDB
<https://www.poxnora.com/api/feed.do?t=json>