typeof(15)
// Prediction:Number
// Actual:'number'

typeof(5.5)
// Prediction:Number
// Actual:'number'

typeof(NaN)
// Prediction:Undefined
// Actual:'number' (Not a Number)

typeof("hello")
// Prediction:String
// Actual:'string'

typeof(true)
// Prediction:Boolean
// Actual:'boolean'

typeof(1 != 2)
// Prediction:Boolean
// Actual:'boolean'

"hamburger" + "s"
// Prediction:hamburgers
// Actual:'hamburgers'

"hamburgers" - "s"
// Prediction:hamburger
// Actual:NaN

"1" + "3"
// Prediction:13
// Actual:'13'

"1" - "3"
// Prediction:-2
// Actual:-2

"johnny" + 5
// Prediction:johnny5
// Actual:'johnny5'

"johnny" - 5
// Prediction:NaN
// Actual:NaN

99 * "hello"
// Prediction:NaN
// Actual:NaN

1 != 1
// Prediction:false
// Actual:false

1 == "1"
// Prediction:true
// Actual:True

1 === "1"
// Prediction:true
// Actual:False ("1" is string)
