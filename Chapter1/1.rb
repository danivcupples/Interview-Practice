#Create is_unique: Implement and algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

def is_unique
  puts "Give me a word or phrase"
  str = gets.chomp.downcase

  result = " "
  count = 0
  while count < str.length
    if str.index(str[count], count + 1)
      result = "we've got a repeater"
      break
    else
      result = "how unique!"
      count += 1
    end
  end
  puts result
end

is_unique
