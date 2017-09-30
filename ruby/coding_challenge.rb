require 'pry'

class PatternGenerator
  def total_available(pattern)
    pattern.chars.reduce(1) do |total, value|
      if value == "#" then total = total * 10
      elsif value == "." then total = total * 26
      end
    end
  end

  def generate(value, seq)
    step = value
    seq.chars.reverse.reduce('') do |ret, char|
      if char == "."
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
        letter = 0
        if step > 10
          letter = (letter + (step % 10)).to_s
          step = (step / 10).floor
        else
          letter = (letter + step).to_s
          step = 0
        end
      end
      ret += letter
    end.reverse
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
