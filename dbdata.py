import psycopg2
import sys
import os

f = open('<data_set>', 'r')
readf = f.readlines()


conn = psycopg2.connect('cockroach cluster link')

conn.set_session(autocommit=True)
cur = conn.cursor()
for line in readf:
    cur.execute(
        "SQL QUERIES"
    )   
    
rfetch = cur.fetchall()
print('ID added:')
for rows in rfetch:
    print([str(cell) for cell in rows])
cur.close()
conn.close()
