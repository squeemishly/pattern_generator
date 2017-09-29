gem 'minitest'
require 'pry'
require 'minitest/autorun'
require_relative './coding_challenge'

class ObjectTest < Minitest::Test
  attr_reader :pg

  def setup
    @pg = PatternGenerator.new
  end

  def test_it_exists
    assert_instance_of PatternGenerator, pg
  end

  def test_it_verifies_a_single_letter
    assert_equal true, pg.verify("A", ".")
  end

  def test_it_returns_false_for_a_bad_pattern
    assert_equal false, pg.verify("A", "#")
  end

  def test_it_confirms_a_more_complicated_pattern
    assert_equal true, pg.verify("A3B", ".#.")
  end

  def test_it_refutes_a_more_complicated_pattern
    assert_equal false, pg.verify("ABB", ".#.")
  end

  def test_it_generates_a_sequence_for_a_single_letter
    assert_equal "A", pg.generate(0, ".")
  end

  def test_it_generates_a_sequence_for_a_single_number
    assert_equal "0", pg.generate(0, "#")
  end

  def test_it_generates_a_sequence_for_numbers_and_letters
    assert_equal "A0A", pg.generate(0, ".#.")
  end

  def test_it_generates_a_sequence_for_a_later_generation_of_a_single_letter
    assert_equal "C", pg.generate(2, ".")
  end

  def test_it_generates_a_sequence_for_a_later_generation_of_a_single_letter
    assert_equal "Z", pg.generate(26, ".")
  end

  def test_it_generates_a_sequence_for_a_later_generation_of_a_single_letter
    assert_equal "2", pg.generate(2, "#")
  end

  def test_it_generates_a_sequence_for_a_later_generation_of_a_group_of_letters
    assert_equal "A2", pg.generate(2, ".#")
  end

  def test_it_generates_a_sequence_for_a_later_generation_of_a_group_of_letters
    assert_equal "A0C", pg.generate(2, ".#.")
  end

  def test_it_rolls_up_the_line_when_the_value_increases
    assert_equal "A1B", pg.generate(27, ".#.")
  end

  def test_it_rolls_up_the_line_when_the_value_increases
    assert_equal "A0C7", pg.generate(27, ".#.#")
  end
end
