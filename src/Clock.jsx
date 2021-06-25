
import { useState, useEffect } from 'react'

const Clock = () => {
    const [sec, setSec] = useState(0)
    const [min, setMin] = useState(0)
    const [hour, setHour] = useState(0)
    const [intervalHolder, setIntervalHolder] = useState(null)

    const toDeg = (increment, step) => {
        return (increment / step) * 360
    }

    const stopTimer = () => {
        clearInterval(intervalHolder)
    }

    useEffect(() => {
        const secHand = document.getElementById("second")
        const minHand = document.getElementById("minute")
        const hourHand = document.getElementById("hour")

        let intervalRun = setInterval(() => {
            let newSec = sec + 1
            setSec(newSec)
            const secDeg = toDeg(sec, 60)
            secHand.style.transform = `rotate(${secDeg}deg)`
            if((sec % 60) === 0) {
                let newMin = min + 1
                setMin(newMin)
                const minDeg = toDeg(min, 60)
                minHand.style.transform = `rotate(${minDeg}deg)`
            }
            if((sec % 3600) === 0) {
                let newHour = hour + 1
                setHour(newHour)
                const hourDeg = toDeg(hour, 12)
                hourHand.style.transform = `rotate(${hourDeg}deg)`
            }
        }, 1000)
        setIntervalHolder(intervalRun)
        return clearInterval(intervalHolder)
    }, [sec])

    return (
        <div>
            <div id="clock">
                <img id="face" src="img/clockface.png" alt="clock face"/>
                <img id="second" src="img/second-hand.png" alt="second hand"/>
                <img id="minute" src="img/minute-hand.png" alt="minute hand"/>
                <img id="hour" src="img/hour-hand.png" alt="hour hand"/>
            </div>
        </div>
    )
}
export default Clock

// SCRAP CODE

// PARTIAL TEST SOL.
// import { useState, useEffect } from "react"

// const Clock = () => {
//     const [today, setToday] = useState(null)
//     const [intervalHolder, setIntervalHolder] = useState(null)

//     useEffect(() => {
//         let newInterval = setInterval(setToday(new Date()), 1000)
//         setIntervalHolder(newInterval)


//         return clearInterval(intervalHolder)
//     }, [])


//     setToday().getSeconds()*6
//     setToday().getMinutes()*6
//     setToday().getHours()*30


//     return (
//         <div>
//             <div id="clock">
//                 <img id="face" src="img/clockface.png" alt="clock face"/>
//                 <img id="second" src="img/second-hand.png" style={{transform: "rotate(" + secDeg + "deg)"}} alt="second hand"/>
//                 <img id="minute" src="img/minute-hand.png" style={{transform: "rotate(" + minDeg + "deg)"}} alt="minute hand"/>
//                 <img id="hour" src="img/hour-hand.png" style={{transform: "rotate(" + hourDeg + "deg)"}} alt="hour hand"/>
//             </div>
//         </div>
//     )
// }
// export default Clock

// FAILED SOL.
// import { useState, useEffect } from "react"

// const Clock = () => {
//     const [today, setToday] = useState(null)
//     const [currentSec, setCurrentSec] = useState(0)
//     const [currentMin, setCurrentMin] = useState(0)
//     const [currentHour, setCurrentHour] = useState(0)
//     const [intervalHolder, setIntervalHolder] = useState(null)
//     const [secDeg, setSecDeg] = useState(0)
//     const [minDeg, setMinDeg] = useState(0)
//     const [hourDeg, setHourDeg] = useState(0)

//     const currentTime = () => {
//         setToday(new Date())
//         secRotate()
//         minRotate()
//         hourRotate()
//     }

//     const secRotate = () => {
//         setToday(new Date())
//         setCurrentSec(today.getSeconds())
//         setSecDeg(currentSec * 6)
//     }

//     const minRotate = () => {
//         setToday(new Date())
//         setCurrentMin(today.getMinutes())
//         setMinDeg(currentMin * 6)
//     }

//     const hourRotate = () => {
//         setToday(new Date())
//         setCurrentHour(today.getHours())
//         setHourDeg(currentHour * 30)
//     }

//     useEffect(() => {
//         let newInterval = setInterval(currentTime, 1000)
//         setIntervalHolder(newInterval)
//         console.log(intervalHolder)
//         return clearInterval(intervalHolder)
//     }, [])

//     return (
//         <div>
//             <div id="clock">
//                 <img id="face" src="img/clockface.png" alt="clock face"/>
//                 <img id="second" src="img/second-hand.png" style={{transform: "rotate(" + secDeg + "deg)"}} alt="second hand"/>
//                 <img id="minute" src="img/minute-hand.png" style={{transform: "rotate(" + minDeg + "deg)"}} alt="minute hand"/>
//                 <img id="hour" src="img/hour-hand.png" style={{transform: "rotate(" + hourDeg + "deg)"}} alt="hour hand"/>
//             </div>
//         </div>
//     )
// }
// export default Clock