#Check Permutation -- Given two strings, write a method to decide if one is a permutation of the other.

def check_permutation
  puts "give me a string"
  str1 = gets.chomp.downcase

  puts "give me another string"
  str2 = gets.chomp.downcase

  result = " "
  if str1.length != str2.length
    result = "not a permutation!"
  else
    count = 0
    while count < str1.length
      if str2.index(str1[count]) == nil
      result = "not a permutation!"
      break
      else
        result = "totally a permutation!"
        count += 1
      end
    end
  end

  puts result
end

check_permutation
