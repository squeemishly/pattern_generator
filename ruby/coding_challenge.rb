require 'pry'

class PatternGenerator
  def generate(value, seq)
    converted = []
    step = value
    seq.chars.reverse.each_with_index do |letter, index|
      if letter == "."
        letter = "A"
        if step > 26
          remaining = step % 26
          letter = (letter.ord + remaining).chr
          step = remaining
        else
          letter = (letter.ord + step).chr
          step = 0
        end
      else
        letter = "0"
        if step > 10
          remaining = step % 10
          letter = (letter.to_i + remaining).to_s
          step = remaining
        else
          letter = (letter.to_i + step).to_s
          step = 0
        end
      end
      converted << letter
    end
    converted.reverse.join('')
  end

  def verify(seq, code)
    aggregated = seq.chars.zip(code.chars)
    return false if !determine_mismatch(aggregated)
    true
  end

  def determine_mismatch(aggregated)
    aggregated.each do |set|
      return false if alpha_mismatch(set)
      return false if digit_mismatch(set)
    end
  end

  def alpha_mismatch(set)
    set[0] =~ /[[:alpha:]]/ && set[1] == "#"
  end

  def digit_mismatch(set)
    set[0] =~ /[[:digit:]]/ && set[1] == "."
  end
end
