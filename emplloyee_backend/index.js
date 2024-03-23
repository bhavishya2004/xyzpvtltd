import express from 'express'
import pg from 'pg'
import cors from 'cors'



const app = express()
app.use(cors());
app.use(express.json())

const db = new pg.Client({
    user:"postgres",
    host:"localhost",
    database:"abcdpvtltd",
     password:"A1b2c3d4e5@",
     port:5432,
});
db.connect();

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/updateAllData', async function (req, res) {
  try {
   const result = await db.query("SELECT * FROM turnover");
   result.rows.forEach( async row => {
      var {id,pnumber,pname,buyingprice,bought,amountout,sellingprice,sold,stock,unitprofit,profit} = row;
      amountout = calculateAmountOut(buyingprice, bought);
      stock = calculateStock(bought, sold);
      unitprofit = calculateUnitProfit(sellingprice, buyingprice);
      profit = calculateTotalProfit( sold, unitprofit);
      const result1 = await db.query("UPDATE turnover SET pnumber=$2,pname=$3,buyingprice=$4,bought=$5,amountout=$6,sellingprice=$7,sold=$8,stock=$9,unitprofit=$10,profit=$11  WHERE id = $1",
        [id,pnumber,pname,buyingprice,bought,amountout,sellingprice,sold,stock,unitprofit,profit]);
      console.log(result1);
    });
   
   res.json(result.rows);
} catch (error) {
console.log(error)   
}
 })

app.post('/addEmployee', async function (req, res) {
   
    let {pnumber,pname,buyingprice,bought,amountout,sellingprice,sold,stock,unitprofit,profit} = req.body;
    amountout = calculateAmountOut(buyingprice, bought);
    stock = calculateStock(bought, sold);
    unitprofit = calculateUnitProfit(sellingprice, buyingprice);
    profit = calculateTotalProfit( sold, unitprofit);

    // console.log(req.body);
    try {
     const result =await db.query("INSERT INTO turnover (pnumber,pname,buyingprice,bought,amountout,sellingprice,sold,stock,unitprofit,profit) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)", [pnumber,pname,buyingprice,bought,amountout,sellingprice,sold,stock,unitprofit,profit])
     //console.log(result.rows)
     res.json("success")
 } catch (error) {
  console.log(error)   
 }
   })

   app.get('/employeeData', async function (req, res) {
   
    try {
     const result =await db.query("SELECT * FROM turnover");
     //console.log(result.rows)
     res.json(result.rows)
 } catch (error) {
  console.log(error)   
 }
   })

   app.post('/delete', async function (req, res) {

    console.log(req.body)
   
    try {
     const result =await db.query("DELETE FROM turnover WHERE id = $1",[req.body.id])
     //console.log(result.rows)
     res.json("success")

 } catch (error) {
  console.log(error)   
 }
   })

   app.post('/getUpdateData', async function (req, res) {
 
    console.log(req.body)
   
    try {
     const result =await db.query("SELECT * FROM turnover WHERE id = $1",[req.body.id])
    //  console.log(result.rows[0])
     res.json(result.rows[0])
     
 } catch (error) {
  console.log(error)   
 }
   })


   app.post('/Update', async function (req, res) {
 
    console.log(req.body)
   let {id,pnumber,pname,buyingprice,bought,amountout,sellingprice,sold,stock,unitprofit,profit} = req.body
   amountout = calculateAmountOut(buyingprice, bought);
      stock = calculateStock(bought, sold);
      unitprofit = calculateUnitProfit(sellingprice, buyingprice);
      profit = calculateTotalProfit( sold, unitprofit);
    try {
     const result =await db.query("UPDATE turnover SET pnumber=$2,pname=$3,buyingprice=$4,bought=$5,amountout=$6,sellingprice=$7,sold=$8,stock=$9,unitprofit=$10,profit=$11  WHERE id = $1",
     [id,pnumber,pname,buyingprice,bought,amountout,sellingprice,sold,stock,unitprofit,profit])
    //  console.log(result.rows[0])
    //  console.log(result.rows)
     res.json("success")
     
 } catch (error) {
  console.log(error)   
 }
   })




   app.post('/addEmployee1', async function (req, res) {
   
    const {e_name,e_monthly_salary,e_yearly_salary} = req.body
    try {
     const result =await db.query("INSERT INTO employee (e_name,e_monthly_salary,e_yearly_salary) VALUES ($1,$2,$3)",[e_name,e_monthly_salary,e_yearly_salary]);
     //console.log(result.rows)
     res.json("success")
 } catch (error) {
  console.log(error)   
 }
   })

   app.get('/employeeData1', async function (req, res) {
   
    try {
     const result =await db.query("SELECT * FROM employee");
     //console.log(result.rows)
     res.json(result.rows)
 } catch (error) {
  console.log(error)   
 }
   })

   app.post('/delete1', async function (req, res) {

    console.log(req.body)
   
    try {
     const result =await db.query("DELETE FROM employee WHERE id = $1",[req.body.id])
     //console.log(result.rows)
     res.json("success")

 } catch (error) {
  console.log(error)   
 }
   })

   app.post('/getUpdateData1', async function (req, res) {
 
    console.log(req.body)
   
    try {
     const result =await db.query("SELECT * FROM employee WHERE id = $1",[req.body.id])
    //  console.log(result.rows[0])
     res.json(result.rows[0])
     
 } catch (error) {
  console.log(error)   
 }
   })


   app.post('/Update1', async function (req, res) {
 
    console.log(req.body)
   const {id,e_name,e_monthly_salary,e_yearly_salary} = req.body
    try {
     const result =await db.query("UPDATE employee SET e_name=$2, e_monthly_salary=$3, e_yearly_salary=$4  WHERE id = $1",
     [id,e_name,e_monthly_salary,e_yearly_salary])
    //  console.log(result.rows[0])
    //  console.log(result.rows)
     res.json("success")
     
 } catch (error) {
  console.log(error)   
 }
   })





   app.post('/addEmployee2', async function (req, res) {
   
    const {e_name,e_monthly_salary,e_yearly_salary,e_imgurl} = req.body
    try {
     const result =await db.query("INSERT INTO employee (e_name,e_monthly_salary,e_yearly_salary,e_imgurl) VALUES ($1,$2,$3,$4)",[e_name,e_monthly_salary,e_yearly_salary,e_imgurl]);
     //console.log(result.rows)
     res.json("success")
 } catch (error) {
  console.log(error)   
 }
   })

   app.get('/employeeData2', async function (req, res) {
   
    try {
     const result =await db.query("SELECT * FROM employee");
     //console.log(result.rows)
     res.json(result.rows)
 } catch (error) {
  console.log(error)   
 }
   })

   app.post('/delete2', async function (req, res) {

    console.log(req.body)
   
    try {
     const result =await db.query("DELETE FROM employee WHERE id = $1",[req.body.id])
     //console.log(result.rows)
     res.json("success")

 } catch (error) {
  console.log(error)   
 }
   })

   app.post('/getUpdate2Data2', async function (req, res) {
 
    console.log(req.body)
   
    try {
     const result =await db.query("SELECT * FROM employee WHERE id = $1",[req.body.id])
    //  console.log(result.rows[0])
     res.json(result.rows[0])
     
 } catch (error) {
  console.log(error)   
 }
   })


   app.post('/Update2', async function (req, res) {
 
    console.log(req.body)
   const {id,e_name,e_monthly_salary,e_yearly_salary} = req.body
    try {
     const result =await db.query("UPDATE employee SET e_name=$2, e_monthly_salary=$3, e_yearly_salary=$4  WHERE id = $1",
     [id,e_name,e_monthly_salary,e_yearly_salary])
    //  console.log(result.rows[0])
    //  console.log(result.rows)
     res.json("success")
     
 } catch (error) {
  console.log(error)   
 }
   })


app.listen(3001)



function calculateAmountOut(buyingprice, bought){
  return buyingprice * bought;
}

function calculateStock(bought, sold){
  return bought - sold;
}

function calculateUnitProfit(sellingprice , buyingprice){
  return sellingprice - buyingprice;
}

function calculateTotalProfit(sold, unitprofit){
  return sold * unitprofit;
}

