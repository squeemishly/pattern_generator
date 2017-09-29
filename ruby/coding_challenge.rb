require 'pry'

class PatternGenerator
  def verify(seq, code)
    aggregated = seq.chars.zip(code.chars)
    aggregated.each do |set|
      return false if alpha_mismatch(set)
      return false if set[0] =~ /[[:digit:]]/ && set[1] == "."
    end
    true
  end

  def alpha_mismatch(set)
    set[0] =~ /[[:alpha:]]/ && set[1] == "#"
  end
end
