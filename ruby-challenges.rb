# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN


# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

def desired_beverages (array, letter)
    array.select{|array| array.include? (letter)}
end

p desired_beverages beverages_array, letter_o
# ["coffee", "soda water"]
p desired_beverages beverages_array, letter_t
# ["tea", "water", "soda water"]



# -------------------2) Create a method that takes in an array of numbers and returns the sum of the numbers. Use the test variables provided.

nums_array1 = [42, 7, 27]
# Expected output: 76

nums_array2 = [25, 17, 47, 11]
# Expected output: 100

def add_it_up (array) 
    array_sum = array.inject(:+)
end

p add_it_up (nums_array1)
#76
p add_it_up (nums_array2)
#100


# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.



# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.


# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0

class Bike 
    attr_accessor :model, :wheels, :current_speed, :speed, :bike
    def initialize(model, wheels, current_speed)
        @model = model
        @wheels = 2
        @current_speed = 0
        @speed = 5 
    end
    def bike_info
      "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
    end
        def pedal_faster num
            pedal = num < @speed + 6 ? num : num + 10
            end
        def brake num
            pull = num <= @speed ? num + 18 : num * 0
          end
    end

my_bike = Bike.new("Trek", 2, 0)
# "The Trek bike has 2 wheels and is going 0 mph."
p my_bike.pedal_faster(10)
# 10
p my_bike.pedal_faster(18)
# 28
p my_bike.brake(5)
# 23 
p my_bike.brake(25)
# 0

