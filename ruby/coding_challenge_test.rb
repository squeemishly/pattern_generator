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
end
