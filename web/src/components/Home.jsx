import { useEffect, useState } from "react"
import { getLocationData } from "../utils/locations"
import { commonDates, getTimeData, loadDates } from "../utils/dateTime"
import { getSwipeData } from "../utils/swipes"

const Home = ({ data }) => {
    const [loading, setLoading] = useState(true)

    const [locations, setLocations] = useState({})
    const [mealTimes, setMealTimes] = useState({
        early: null,
        late: null,
        avg: {
            breakfast: null,
            lunch: null,
            dinner: null
        }
    })
    const [swipes, setSwipes] = useState({
        thisWeek: null,
        avgWeek: null,
    })

    useEffect(() => {
        loadDates(data)

        setMealTimes(getTimeData(commonDates))
        setLocations(getLocationData(data))
        setSwipes(getSwipeData(commonDates))

        setLoading(false)
    }, [data])

    const formatTime = (date) => date.toLocaleTimeString(navigator.language, { hour: 'numeric', minute: 'numeric' })

    return (
        <>
            <p>welcome croads wrapped MVP</p>
            <button onClick={() => console.log(data)}>
                raw data
            </button>

            {!loading &&
                <>
                    <div>
                        <h2>
                            Debit Balance
                        </h2>
                        {data["Cal 1 Card Debit Plan Activity"][0]["New Balance"]}
                    </div>
                    <div>
                        <h2>
                            Flex Balance
                        </h2>
                        {data["On-Campus Meal Plan Flex Dollars Activity"][0]["New Balance"]}
                    </div>

                    <div>
                        <h2>
                            Total Swipes Used
                        </h2>
                        {data["On-Campus Blue Meal Plan Activity"].length}
                        <h3>Swipes this Week</h3>
                        {swipes['thisWeek']} out of 12
                        <h3>Average Swipes/Week this Semester (wip)</h3>
                        {swipes['avgWeek']} out of 12

                    </div>

                    <div>
                        <h2>
                            Dining Locations
                        </h2>
                        <ul>
                            {
                                Object.keys(locations).map((loc) =>
                                    <li>{loc}: {locations[loc]}</li>
                                )
                            }
                        </ul>
                    </div>
                    <div>
                        <h2>Time Stats</h2>
                        <p>
                            Earliest: {formatTime(mealTimes['early'])}
                        </p>
                        <p>
                            Latest: {formatTime(mealTimes['late'])}
                        </p>
                        <h3>Average Times</h3>
                        {Object.entries(mealTimes['avg']).map(([key, value]) => (
                            <p>
                                {key}: {formatTime(value)}
                            </p>
                        ))}
                    </div>
                </>
            }
        </>
    )

}

export default Home