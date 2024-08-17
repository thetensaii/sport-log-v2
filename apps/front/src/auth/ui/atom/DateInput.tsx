import { Button } from "#/components/ui/button"
import { FormLabel } from "#/components/ui/form-label"
import { IconButton } from "#/components/ui/icon-button"
import { Input } from "#/components/ui/input"
import { DatePicker } from "@ark-ui/react"
import { CalendarIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import { css } from "styled-system/css"

type Props = {
  name: string
  label: string
}

export const DateInput:React.FC<Props> = ({ name, label }) => {
  return (
    <DatePicker.Root
      locale="fr"
      selectionMode="single"
    >
      <DatePicker.Label asChild>
        <FormLabel>{label}</FormLabel>
      </DatePicker.Label>
      <DatePicker.Control className={css({display: "flex", gap: 2})}>
        <DatePicker.Input asChild name={name}>
          <Input />
        </DatePicker.Input>
        <DatePicker.Trigger asChild>
          <IconButton variant="outline" aria-label="Open date picker">
            <CalendarIcon />
          </IconButton>
        </DatePicker.Trigger>
      </DatePicker.Control>
      <DatePicker.Positioner>
        <DatePicker.Content className={css({ p: 4, borderRadius:"md", shadow: "lg"})}>
          <DatePicker.View view="day">
            <DatePicker.Context>
              {(api) => (
                <>
                  <DatePicker.ViewControl className={css({display: "flex", justifyContent: "space-between", marginBottom: 4})}>
                    <DatePicker.PrevTrigger asChild>
                      <IconButton variant="ghost" size="sm">
                        <ChevronLeftIcon />
                      </IconButton>
                    </DatePicker.PrevTrigger>
                    <DatePicker.ViewTrigger>
                      <Button type="button" variant="ghost" size="sm">
                        <DatePicker.RangeText />
                      </Button>
                    </DatePicker.ViewTrigger>
                    <DatePicker.NextTrigger asChild>
                      <IconButton variant="ghost" size="sm">
                        <ChevronRightIcon />
                      </IconButton>
                    </DatePicker.NextTrigger>
                  </DatePicker.ViewControl>
                  <DatePicker.Table>
                    <DatePicker.TableHead>
                      <DatePicker.TableRow>
                        {api.weekDays.map((weekDay, id) => (
                          <DatePicker.TableHeader key={id}>
                            {weekDay.narrow}
                          </DatePicker.TableHeader>
                        ))}
                      </DatePicker.TableRow>
                    </DatePicker.TableHead>
                    <DatePicker.TableBody>
                      {api.weeks.map((week, id) => (
                        <DatePicker.TableRow key={id}>
                          {week.map((day, id) => (
                            <DatePicker.TableCell key={id} value={day}>
                              <DatePicker.TableCellTrigger asChild>
                                <IconButton variant="ghost" type="button">{day.day}</IconButton>
                              </DatePicker.TableCellTrigger>
                            </DatePicker.TableCell>
                          ))}
                        </DatePicker.TableRow>
                      ))}
                    </DatePicker.TableBody>
                  </DatePicker.Table>
                </>
              )}
            </DatePicker.Context>
          </DatePicker.View>

          <DatePicker.View view="month">
            <DatePicker.Context>
              {(api) => (
                <>
                  <DatePicker.ViewControl className={css({display: "flex", justifyContent: "space-between", marginBottom: 4})}>
                    <DatePicker.PrevTrigger asChild>
                      <IconButton variant="ghost" size="sm">
                        <ChevronLeftIcon />
                      </IconButton>
                    </DatePicker.PrevTrigger>
                    <DatePicker.ViewTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <DatePicker.RangeText />
                      </Button>
                    </DatePicker.ViewTrigger>
                    <DatePicker.NextTrigger asChild>
                      <IconButton variant="ghost" size="sm">
                        <ChevronRightIcon />
                      </IconButton>
                    </DatePicker.NextTrigger>
                  </DatePicker.ViewControl>
                  <DatePicker.Table>
                    <DatePicker.TableBody>
                      {api.getMonthsGrid({ columns: 4, format: 'short' }).map((months, id) => (
                        <DatePicker.TableRow key={id}>
                          {months.map((month, id) => (
                            <DatePicker.TableCell key={id} value={month.value}>
                              <DatePicker.TableCellTrigger asChild>
                                <Button type="button" variant="ghost">{month.label}</Button>
                              </DatePicker.TableCellTrigger>
                            </DatePicker.TableCell>
                          ))}
                        </DatePicker.TableRow>
                      ))}
                    </DatePicker.TableBody>
                  </DatePicker.Table>
                </>
              )}
            </DatePicker.Context>
          </DatePicker.View>

          <DatePicker.View view="year">
            <DatePicker.Context>
              {(api) => (
                <>
                  <DatePicker.ViewControl className={css({display: "flex", justifyContent: "space-between", marginBottom: 4})}>
                    <DatePicker.PrevTrigger asChild>
                      <IconButton variant="ghost" size="sm">
                        <ChevronLeftIcon />
                      </IconButton>
                    </DatePicker.PrevTrigger>
                    <DatePicker.ViewTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <DatePicker.RangeText />
                      </Button>
                    </DatePicker.ViewTrigger>
                    <DatePicker.NextTrigger asChild>
                      <IconButton variant="ghost" size="sm">
                        <ChevronRightIcon />
                      </IconButton>
                    </DatePicker.NextTrigger>
                  </DatePicker.ViewControl>
                  <DatePicker.Table>
                    <DatePicker.TableBody>
                      {api.getYearsGrid({ columns: 4 }).map((years, id) => (
                        <DatePicker.TableRow key={id}>
                          {years.map((year, id) => (
                            <DatePicker.TableCell key={id} value={year.value}>
                              <DatePicker.TableCellTrigger asChild>
                                <Button type="button" variant="ghost">{year.label}</Button>
                              </DatePicker.TableCellTrigger>
                            </DatePicker.TableCell>
                          ))}
                        </DatePicker.TableRow>
                      ))}
                    </DatePicker.TableBody>
                  </DatePicker.Table>
                </>
              )}
            </DatePicker.Context>
          </DatePicker.View>
        </DatePicker.Content>
      </DatePicker.Positioner>
    </DatePicker.Root>
  )
}