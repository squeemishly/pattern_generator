require 'pry'

class PatternGenerator
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
