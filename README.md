# Digital Collections to brick-by-brick

1. Reads items & MODS data from Digital Collections, outputs [brick-by-brick](https://github.com/nypl-spacetime/brick-by-brick) data
2. Imports data into brick-by-brick database

dc-to-brick uses [to-brick](https://github.com/nypl-spacetime/to-brick) to write collections and items to the brick-by-brick database (local and remote),

## Usage

    npm install

    node from-dc.js > data/items.ndjson
    node to-brick.js

By default, dc-to-brick uses the following connection string to connect to PostgreSQL:

    postgres://postgres:postgres@localhost:5432/brick-by-brick

To connect to a different database, use the `-d` command line argument:

    node to-brick.js -d "postgres://user:password@host:port/database"


## Notes
1. Clone dc-to-brick
2. Run npm install error , use node 20, return error, use node 14 return error
3. Run on local laptop, use node v7 return error
4. Use node 16 also failed
5. Clone to-brick repo inside dc-to-brick repo
6. Edit some functions and upgrade dependencies inside to-brick
7. Remove dependencies used by 'from-dc.js'
8. npm install works

## Running This Repo (After some modifications)
1. Clone https://github.com/buildvoc/dc-to-brick.git
2. Checkout to 1.3.0 branch git checkout 1.3.0
3. Run npm install
4. Run cd to-brick
5. Run npm install again inside to-brick directory
6. Setup Postgree database connection by editing .env.example to .env and add database connection config
6. Back to dc-to-brick directory
7. Run this app node to-brick.js