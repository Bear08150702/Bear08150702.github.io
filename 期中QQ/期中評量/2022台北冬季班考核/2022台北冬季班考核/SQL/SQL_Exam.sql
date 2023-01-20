USE [Northwind]

--1 列出各產品的供應商名稱
SELECT
	ProductID,CompanyName
FROM Products p
INNER JOIN Suppliers s ON s.SupplierID = p.SupplierID
/*SELECT
	ShipperID,CompanyName
FROM Shippers*/
--2 列出各產品的種類名稱
SELECT
	ProductID,CategoryName
FROM Products p
INNER JOIN Categories c ON c.CategoryID = p.CategoryID
--3 列出各訂單的顧客名字
SELECT
	OrderID,c.CompanyName,c.ContactName
FROM Orders o
INNER JOIN Customers c ON o.CustomerID = c.CustomerID
--4 列出各訂單的所負責的物流商名字以及員工名字
SELECT
	o.OrderID,s.CompanyName,e.FirstName
FROM Orders o
INNER JOIN Employees e ON e.EmployeeID = o.EmployeeID
INNER JOIN Shippers s ON s.ShipperID = o.ShipVia
--5 列出1998年的訂單
SELECT
	*
FROM Orders
WHERE year(OrderDate) = '1998'
--6 各產品，UnitsInStock < UnitsOnOrder 顯示'供不應求'，否則顯示'正常'

--7 取得訂單日期最新的9筆訂單

--8 產品單價最便宜的第4~8名

--9 列出每種類別中最高單價的商品

--10 列出每個訂單的總金額

--11 列出每個物流商送過的訂單筆數

--12 列出被下訂次數小於9次的產品

-- (13、14、15請一起寫)
--13 新增物流商(Shippers)：
-- 公司名稱: 青杉人才，電話: (02)66057606
-- 公司名稱: 青群科技，電話: (02)14055374

--14 方才新增的兩筆資料，電話都改成(02)66057606，公司名稱結尾加'有限公司'

--15 刪除剛才兩筆資料

