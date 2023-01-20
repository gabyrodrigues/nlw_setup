import { Text, View, ScrollView } from "react-native"
import { generateDatesFromYearBeginning } from "../../utils/generate-dates-from-year-beginning"
import { DAY_SIZE, HabitDay } from "../HabitDay"
import { Header } from "../Header"

const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"]
const datesFromYearStart = generateDatesFromYearBeginning()
const minimumSummaryDatesSize = 18 * 5 //18 weeks
const amountOfDaysToFill = minimumSummaryDatesSize - datesFromYearStart.length // placeholder to fill HabitsDay when summarDates is not enough days visually

export function Home() {
  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <Header />

      <View className="flex-row mt-6 mb-2">
        {weekDays.map((weekDay, index) => (
          <Text
            key={`${weekDay}-${index}`}
            className="text-zinc-400 text-xl font-bold text-center mx-1"
            style={{ width: DAY_SIZE }}
          >
            {weekDay}
          </Text>
        ))}
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <View className="flex-row flex-wrap">
          {datesFromYearStart.map((date) => (
            <HabitDay key={date.toISOString()} />
          ))}

          {amountOfDaysToFill > 0 &&
            Array.from({ length: amountOfDaysToFill }).map((_, index) => (
              <View
                key={index}
                className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800 opacity-40"
                style={{ width: DAY_SIZE, height: DAY_SIZE }}
              />
            ))}
        </View>
      </ScrollView>
    </View>
  )
}
